public class FactoryPatternDemo {

  public static void main(String[] args) {
    ShapeFactory shapeFactory = new ShapeFactory();

    // get an object of Circle
    Shape shape1 = shapeFactory.getShape("circle");

    // call draw() on Circle
    shape1.draw();

    Shape shape2 = shapeFactory.getShape("rectangle");
    shape2.draw();
    Shape shape3 = shapeFactory.getShape("square");
    shape3.draw();
  }
}