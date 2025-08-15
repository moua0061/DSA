import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Time_Conversion {
    public static void main(String[] args) {
        String s = "10:05:45PM";
        System.out.println(timeConversion(s));
    }

    public static String timeConversion(String s) {
        // the minute & seconds are the parts that stays the same
        // it's the am/pm that changes the hour
        // if it's after 12pm, we add the hour to 12 to get the military time
        // if it's before 12pm, we keep the number the same to get the military time

        // need a string variable to hold our final results
        String finalResults = "";
        // separate each parts 07, 05, 45, pm
        // then put them each in a variable
        // hour, minute, seconds, ampm
        String hour = s.substring(0,2);
        String minutes = s.substring(3,5);
        String seconds = s.substring(6, 8);
        String ampm = s.substring(8,10);
        //need to parse the string hour into an in
        int parsedHour = Integer.parseInt(hour);

        // if the hour is 12 and ampm is am
        if(ampm.equals("AM") && hour.equals("12")){
            // turn hour into 00, keep the minutes & seconds the same
            hour = "00";
        }
        if(ampm.equals("PM") && parsedHour < 12){
            // if the ampm is pm and the hour is less than 12, add that number to 12
            // parse the string into an integer
            // then add 12 to it
            // then parse that int back into a string
            //parsedHour = Integer.parseInt(hour);
            parsedHour += 12;
            hour = Integer.toString(parsedHour);
        }
        if(ampm.equals("PM") && hour.equals("12")){
            //do nothing
        }
        // return the final results
        return finalResults = hour+":"+minutes+":"+seconds;
    }
}
