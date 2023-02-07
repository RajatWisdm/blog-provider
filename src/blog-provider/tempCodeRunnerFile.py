s1 = "a?c"
s2 = "??b"
n = len(s1)
i = 0
mn, mx = 0, 0
while i<n:
    if s1[i]!="?" and s2[i]!="?" and s1[i]!=s2[i]:
        mn += 1
        mx += 1
    if s1[i]=="?" and s2[i]=="?":
        mx += 1
    if s1[i]=="?" and s2[i]!="?":
        mx += 1
    if s1[i]!="?" and s2[i]=="?":
        mx += 1
    i += 1
print(mn, mx)