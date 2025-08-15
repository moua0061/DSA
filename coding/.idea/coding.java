//Write a program to iterate 1 to 100 (inclusive) that does the following (only 1 option should appear per number):
//For multiples of 3, print “Meridian”
//For multiples of 5, print “Link”
//For multiples of both, print "MeridianLink"

//3, 6, 9, 12, 15
//5, 10, 15, 20
//1, 2, 3, 4, 5, 6, ,7, 8, 15
public String meridianLink(){

    for(int i = 1; i <= 100; i++ ){
        //if the number is 3, 6, 9, etc, then pring "meridian"
        if(i % 3 = 0 && i % 5 = 0){
            System.printout("MeridianLink");
        } else if(i % 3 = 0){
            System.printout("Meridian");
        } else if(i % 5 = 0){
            System.printout("Link");
        } else {
            //do nothing
        }
    }
}