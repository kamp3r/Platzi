class Main{

    public static void main(String[] args) {
        System.out.println("hola Mundo");
        Car car = new Car("THU544", new Account("Perrazo malo", "AND123"));
        car.passenger = 4;
        car.printDataCar();
    }
}