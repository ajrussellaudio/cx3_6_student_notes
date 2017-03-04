public class Card implements CardRank {
  CardRank rank;
  CardSuit suit;

  public Card(CardRank rank, CardSuit suit) {
    this.suit = suit;
  }
}