#Problem 1: Hello World!
def hello_world():
    print("Hello world!")
    
hello_world()

#Problem 2: Today's Mood
def todays_mood():
    #mood = "😎"
    mood = "🥱"
    print("Today's mood: " + mood)

todays_mood()

#Problem 3: Lunch Menu
def print_menu(menu):
    print("Lunch today is: " + menu)
    
print("🍕")

#Problem 4: Sum of Two Integers
def sum(a, b):
    return a + b
print(sum(13, 27))

#Problem 5: Product of Two Integers
def product(a, b):
    return a * b
print(product(22, 7))

#Problem 6: Classify Age
def classify_age(age):
    print("----------------------------------")
    if age < 18:
        print("child")
    else:
        print("adult")
        
classify_age(18)
classify_age(7)
classify_age(50)

#Problem 7: What time is it?
def what_time_is_it(hour):
    print("----------------------------------")
    if hour == 2:
        print("taco time 🌮")
    elif hour == 12:
        print("peanut butter jelly time 🥪")
    else:
        print("nap time 😴")
what_time_is_it(2)
what_time_is_it(7)
what_time_is_it(12)

#Problem 8: Blackjack
def blackjack(score):
    print("----------------------------------")
    if score == 21:
        print("Blackjack!")
    elif score > 21:
        print("Bust!")
    elif score >= 17 and score < 21:
        print("Nice hand!")
    else:
        print("Hit me!")
blackjack(24)
blackjack(19)
blackjack(21)
blackjack(10)

#Problem 9: First Item
def get_first(lst):
    print("----------------------------------")
    #pass
    #pass is a keyword that is used as a placeholder for future code
    if lst:
        return lst[0]
    else:
        return None
lst = [3,1,6,7,5]
print(get_first(lst))

#Problem 10: Last Item
def get_last(lst):
    print("----------------------------------")
    #pass
    if lst:
        return lst[-1]
    else:
        return None
print(get_last(lst))

#Problem 11: Counter
def counter(stop):
    print("----------------------------------")
    #pass
    #range(stop + 1)
    for i in range(stop):
        #print("------------")
        print(i + 1)
counter(7)

#Problem 12: Sum of 1 to 10
def sum_ten():
    print("----------------------------------")
    sum = 0
    #pass
    for i in range(1,11): #stop is exclusive
        sum += i
    print(sum)
sum_ten()

#Problem 13: Total Sum
def sum_positive_range(stop):
    print("----------------------------------")
    sum = 0
    #pass
    for i in range(1, stop + 1):
        sum += i
    print(sum)
sum_positive_range(6)

#Problem 14: Total Sum in Range
def sum_range(start, stop):
    #pass
    print("----------------------------------")
    sum = 0
    for i in range(start, stop + 1):
        sum += i
    print(sum)
sum_range(3, 9)

#Problem 15: Negative Numbers
def print_negatives(lst):
    print("----------------------------------")
    for i in lst:
        if i < 0:
            print(i)
lst2 = [3,-2,2,1,-5]
print_negatives(lst2)