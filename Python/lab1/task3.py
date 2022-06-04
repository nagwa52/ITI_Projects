
def splitter(s):
    if len(s)%2 == 0:
        s1 = slice(0,len(s)//2)
        s2 = slice(len(s)//2, len(s))
        print(s[s1], s[s2])
    else:
        mid = (len(s)+1)//2
        print(s[:mid],s[mid:])
s = "example"
splitter(s)    