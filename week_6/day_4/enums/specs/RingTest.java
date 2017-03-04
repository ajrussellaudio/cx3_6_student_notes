import static org.junit.Assert.*;
import org.junit.*;
import jewellery.*;

public class RingTest {

  Ring ring;
  
  @Before 
  public void before(){
    ring = new Ring(MetalType.GOLD, GemType.RUBY);
  }

  @Test
  public void canGetMetal(){
    assertEquals(MetalType.GOLD, ring.getMetal());
  }

  @Test
  public void canGetGem() {
    assertEquals(GemType.RUBY, ring.getGem());
  }

  @Test
  public void canMakeSimpleRing(){
    Ring simpleRing = new Ring(MetalType.SILVER);
    assertNotNull(simpleRing.getMetal());
  }

  @Test
  public void cannotGetGemFromSimpleRing(){
    Ring simpleRing = new Ring(MetalType.SILVER);
    assertNull(simpleRing.getGem());
  }

  // @Test
  // public void canBeMisspelled() {
  //   ring = new Ring("Golllld");
  //   assertEquals("Golllld", ring.getMetal());
  // }

  // @Test
  // public void metalCanBeBanana() {
  //   ring = new Ring(MetalType.BANANA);
  //   assertEquals(MetalType.BANANA, ring.getMetal());
  // }

}