import { modelMessage } from './model.js';

const addMessage = (message) => {
  const myMessage = new modelMessage(message);
  myMessage.save();
};

const getMessage = (filterUser) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      filter = { chat: filterUser };
    }
    const messages = modelMessage
      .find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      })
  });
};

const updateMessage = async (id, message) => {
  const myMessage = await modelMessage.findByIdAndUpdate(
    { _id: id },
    { message: message }
  );
  return myMessage;
};

const deleteMessage = async (id) => {
  const myMessage = await modelMessage.findByIdAndRemove({ _id: id });
  return myMessage;
};

export { addMessage, getMessage, updateMessage, deleteMessage };
