class MediaPlayer{
    constructor(config){
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.#initPlugins();
    }
    #initPlugins(){
        this.plugins.forEach(plugin =>{
            plugin.runner(this.media)
        })
    }
    play(){
        this.media.play()
    }
    pause(){
        this.media.pause()
    }
    togglePlay(){
        if(this.media.paused){
            this.play()
        }else{
            this.pause()
        }
    }
    toggleMute(){
        this.media.muted = !this.media.muted
    }
}

export default MediaPlayer

