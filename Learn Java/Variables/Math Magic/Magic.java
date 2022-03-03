public class Magic {
	public static void main(String[] args) {
    int myNumber = 8;
    // int myNumber = -8;
    //int myNumber = -88;
    // Objective will refer to myNumber as "the original number"
    		int stepOne = myNumber * myNumber;
        int stepTwo = stepOne + myNumber;
        int stepThree = stepTwo / myNumber;
        int stepFour = stepThree + 17;
        int stepFive = stepFour - myNumber;
        int stepSix = stepFive / 6;
        System.out.print(stepSix);
	}
}
