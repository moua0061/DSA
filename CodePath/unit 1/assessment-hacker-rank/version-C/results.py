def sum(num):
    final_ans = 0
    for num in range(num):
        #print(num)
        final_ans += num
    return final_ans
print(sum(6))
# 0, 1, 2, 4, 5 => 3, 7 + 5 = 15

def find_max(lst):
    # Write your code here
    max = 0
    for num in lst:
        if num > 0 and num > max:
            max = num
    return max
print(find_max([5, 1, 2, 3, 4]))
print(find_max([2, 4, 6, 8, 10]))

def count_occurrences(lst, val):
    # Write your code here
    counter = 0
    for num in lst:
        if num == val:
            counter += 1
    return counter
print(count_occurrences([1, 2, 3, 2], 2))
print(count_occurrences([1, 2, 3, 4, 5, 6, 7, 8], 8))