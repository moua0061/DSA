#Problem 1: Hello User!
def greet_user(name):
    print("----------------------------------")
    #pass
    print("Hello " + name)
greet_user("Michael")

#Problem 2: Calculate Difference
def difference(a, b):
    print("----------------------------------")
    #pass
    return b - a
print(difference(3, 8))

#Problem 3: List Concatenation
def concatenate_lists(nums):
    print("----------------------------------")
    #pass
    results = nums.copy()
    for i in range(len(nums)):
        results.append(nums[i])
    return results
print(concatenate_lists([1, 2, 3, 4]))

#Problem 4: Sleep Assessment
def sleep_assessment(hours):
    print("----------------------------------")
    #pass
    if hours < 8:
        print("Oof, go back to bed!")
    elif hours >= 8 and hours <= 10:
        print("You got a good night's rest!")
    else:
        print("You're a sleep prodigy!")
sleep_assessment(10)
sleep_assessment(4)
sleep_assessment(12)
sleep_assessment(9)

#Problem 5: Calculate Tip
def calculate_tip(bill, service_quality):
    print("----------------------------------")
    #pass
    if service_quality == "poor":
        return bill * .10
    elif service_quality == "average":
        return bill * 0.15
    elif service_quality == "excellent":
        return bill * .20
    else:
        return None
print(calculate_tip(44.53, "average"))
print(calculate_tip(44.53, "poor"))
print(calculate_tip(44.53, "excellent"))

#Problem 6: Rock, Paper, Scissors
def rock_paper_scissors(player1, player2):
    print("----------------------------------")
    #pass
    if player1 == "rock" and player2 == "scissors":
        print("Player 1 wins!")
    elif player1 == "scissors" and player2 == "paper":
        print("Player 1 wins!")
    elif player1 == "paper" and player2 == "rock":
        print("Player 1 wins!")
    elif player2 == "rock" and player1 == "scissors":
        print("Player 2 wins!")
    elif player2 == "scissors" and player1 == "paper":
        print("Player 2 wins!")
    elif player2 == "paper" and player1 == "rock":
        print("Player 2 wins!")
    else:
        print("It's a tie!")
rock_paper_scissors("rock", "rock")
rock_paper_scissors("scissors", "rock")
rock_paper_scissors("scissors","paper")
rock_paper_scissors("rock", "paper")
rock_paper_scissors("paper", "rock")

#Problem 7: Unscramble and Divide
def halve_lst(lst):
    result = []
    for number in lst:
        halved = number/2
        result.append(halved)
    return result
print(halve_lst([2,4,6,8]))

