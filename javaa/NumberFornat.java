package javaa;

import java.util.Scanner;

public class NumberFornat{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter 2 nums");
        String n1 = sc.next();
        String n2 = sc.next();
        try {
            int a = Integer.parseInt(n1);
            int b = Integer.parseInt(n2);
            int c = a/b;
            System.out.println(c);
        } catch (ArithmeticException e) {
           System.out.println(e);
        }catch (NumberFormatException e) {
            System.out.println(e);
         }

    }
}