import static org.junit.Assert.*;
import org.junit.*;
import card_game.*;

public class DeckTest {

  Deck deck;

  @Before
  public void before() {
    deck = new Deck();
  }

  @Test
  public void emptyNewDeck() {
    assertEquals(0, deck.getCount());
  }

  @Test
  public void canFillDeck() {
    deck.fullDeck();
    assertEquals(52, deck.getCount());
  }

  @Test
  public void canDealCard() {
    deck.fullDeck();
    Card card = deck.dealACard();
    assertEquals(SuitType.HEARTS, card.getSuit());
    assertEquals(51, deck.getCount());
  }


}