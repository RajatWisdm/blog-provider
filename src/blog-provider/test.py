# s1 = "???a"
# s2 = "???a"
# n = len(s1)
# i = 0
# mn, mx = 0, 0
# while i<n:
#     if s1[i]!="?" and s2[i]!="?" and s1[i]!=s2[i]:
#         mn += 1
#         mx += 1
#     if s1[i]=="?" and s2[i]=="?":
#         mx += 1
#     if s1[i]=="?" and s2[i]!="?":
#         mx += 1
#     if s1[i]!="?" and s2[i]=="?":
#         mx += 1
#     i += 1
# print(mn, mx)



s = "abcdefghijklmnop1"
l = 0
n = len(s)
nums = set([str(i) for i in range(10)])
while l<n and s[l] not in nums:
    l += 1
if l==n:
    print(l)
else:
    t = s[l:]
    m = len(t)
    d = len(str(l-1))-m
    if int(t)*(10**d)>l:
        print(-1)
    else:
        print(l-int(t)*(10**d))