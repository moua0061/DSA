def move_zeros(nums):
    left = 0
    for right in range(len(nums)):
        if nums[right] != 0:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
    return nums

num = [0, 1, 0, 3, 12]
print(move_zeros(num))

def find_middle(lst):
    slow = fast = 0
    while fast < len(lst) and fast + 1 < len(lst):
        slow += 1
        fast += 2
    return lst[slow]

num2 = [1, 2, 3, 4, 5, 6]
print(find_middle(num2))

def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left += 1
        right -= 1
    return s

s = ['h', 'e', 'l', 'l', 'o']
print(reverse_string(s))

def find_pair_sum(s, target):
    # Write your code here
    left, right = 0, 1
    lengt = len(s) -1
    print('what is lengt: ', lengt)

    for char in s:
        print('what is char:', char)

    # while left < right:
    #     return True
    return False
s = '1234'
target = 5
print(find_pair_sum(s, target))