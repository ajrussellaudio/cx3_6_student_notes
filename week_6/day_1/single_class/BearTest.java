import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BearTest {

  Bear bear;

  @Before
  public void before() {
    bear = new Bear("Baloo", 10, 95.6, 170.9);
  }

  @Test
  public void hasName(){
    assertEquals("Baloo", bear.getName());
  }

  @Test
  public void hasAge(){
    assertEquals(10, bear.getAge());
  }

  @Test
  public void hasWeight() {
    assertEquals(95.6, bear.getWeight(), 0.01);
  }

  // @Test
  // public void isReadyToHibernateIfOver80() {
  //   assertEquals(true, bear.readyToHibernate());
  // }

  // @Test
  // public void notReadyToHibernateIfLessThan80() {
  //   Bear thinBear = new Bear("Winnie", 15, 60.2, 170.9);
  //   assertEquals(false, thinBear.readyToHibernate());
  // }

  @Test
  public void hasBMI() {
    assertEquals(32.73, bear.bmi(), 0.01);
  }

  @Test
  public void isReadyToHibernateIfBMIover20() {
    assertEquals(true, bear.readyToHibernate());
  }

  @Test
  public void isNotReadyToHibernateIfBMIunder20() {
    Bear skinnyBear = new Bear("Rupert", 13, 54.2, 170.9);
    assertEquals(false, skinnyBear.readyToHibernate());
  }

}