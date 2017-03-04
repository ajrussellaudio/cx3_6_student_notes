public class Bear {

  private String name;
  private Salmon[] belly;

  public Bear(String name) {
    this.name = name;
    this.belly = new Salmon[5];
  }

  public String getName() {
    return this.name;
  }

  public int foodCount() {
    int counter = 0;
    for(Salmon salmon : belly){
      if(salmon != null) {
        counter++;
      }
    }
    return counter;
  }

  // public void eat(Salmon salmon) {
  //   int foodCount = foodCount();
  //   if(bellyFull() == false){
  //     belly[foodCount] = salmon;
  //   }
  // }

  public void eat(Salmon salmon) {
    if( bellyFull() ) return;
    int foodCount = foodCount();
    belly[foodCount] = salmon;
  }

  // public boolean bellyFull() {
  //   int foodCount = foodCount();
  //   if(foodCount == belly.length){
  //     return true;
  //   }
  //   return false;
  // }

  public boolean bellyFull() {
    return foodCount() == belly.length;
  }

  public void sleep() {
    // this.belly = new Salmon[5];            // works
    // this.belly = new Salmon[belly.length]; // better

    // for(Salmon salmon : belly){
    //   salmon = null;
    // } // doesn't work

    for(int i = 0; i < belly.length; i++){
      belly[i] = null;
    }
  }

}
