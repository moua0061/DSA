def aFunc(start, end):
    final_ans = 0
    for i in range(start, end):
        final_ans += i
        result = final_ans * 2
    print(final_ans)
    result = final_ans * 2
    return result
#print(aFunc(1, 6))
#1 + 2 + 3 + 4 + 5 = 
#3 + 7 + 5 
#10 + 5 = 15
#15 * 2 = 30

def find_sum(lst):
    # Write your code here
    sum = 0
    for num in lst:
        sum += num
    return sum
print(find_sum([2, 4, 6, 8, 10])) 

def find_min(lst):
    # Write your code here
    min = lst[0]
    for num in lst:
        if num < min:
            min = num
    return min
print(find_min([5, 1, 2, 3, 4])) #should return 1