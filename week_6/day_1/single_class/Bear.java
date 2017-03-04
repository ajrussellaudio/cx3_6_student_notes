class Bear {

  private String name;
  private int age;
  private double weight;
  private double height;

  public Bear(String name, int age, double weight, double height) {
    this.name = name;
    this.age  = age;
    this.weight = weight;
    this.height = height;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return this.age;
  }

  public double getWeight() {
    return this.weight;
  }

  public boolean readyToHibernate() {
    return bmi() >= 20.0;
  }

  public double bmi() {
    return weight / Math.pow((height / 100), 2.0);
  }

}