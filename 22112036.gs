--Note : Bottom to up function pattern is used

ms.0=[]
ms.n=ms.(n/10)++[rem.n.10]                                      -- ms: Make Seperate            -- converts Ex 234 into "234"

mms1.n=map.((+).48).(ms.n)

mms.n=map.chr.(mms1.n)                                          -- mms: Main Make Seperate      -- converts each into char

combinary.[]=[]                                                 -- It combines all the ascii value in a single 1D list seperated with question symbol
combinary.(x::xs)=(mms.x)++['?']++combinary.xs

mk.[]=0 								-- It is making key in int by adding sum of ascii
mk.(x::xs)=(ord.x)+(mk.xs)

msc.[]=[]   								-- This fnction goes to the range of special characters
msc.(x::xs)=if (x=='?') then x::msc.xs else chr.(ord.x-13)::msc.xs

addlayer.[].n=[]
addlayer.(x::xs).n=(x+n)::addlayer.xs.n

encrypt.xs.ks=msc.(combinary.(addlayer.(map.ord.xs).(mk.ks)))   -- msc: Make Special Character  -- Program Starts from here for encryption



                                -- ENCRYPTION ENDS HERE


rev.[]=[]
rev.(x::xs)=rev.xs++[x]

seperate.xs=rev.(seperate1.xs.[].[])                                                            -- xs: Temperary stack ; ys: Output of seperate
seperate1.[].ys.zs=zs                                                                           -- It is opposite of Combinary Function
seperate1.(x::xs).ys.zs=if (x=='?') then seperate1.xs.[].(ys::zs) else seperate1.xs.(ys++[x]).zs      --- (VVIMP)

sol.[]=0
sol.(x::xs)=1+sol.xs                                            -- sol : size of list

myfunc.xs=myfunc1.xs.(sol.xs)                                   -- myfunc is custom function to be used in map

myfunc1.[].0=0
myfunc1.(x::xs).n=(((ord.x)-48)*(10^(n-1))) + myfunc1.xs.(n-1)

convint.xs=map.myfunc.xs                                        -- Converts char into Integer Ex "234" to 234

makechar.xs=map.chr.xs

sublayer.[].n=[]
sublayer.(x::xs).n=(x-n)::sublayer.xs.n

mscd.[]=[]                                                             -- Oppo. of msc for decryption removes special character range
mscd.(x::xs)=if (x=='?') then x::mscd.xs else chr.(ord.x+13)::mscd.xs

decrypt.xs.ks=makechar.(sublayer.(convint.(seperate.(mscd.xs))).(mk.ks))     -- Decrypt Main function


        --  DECRYPTION ENDS HERE



-- Project2 (Level 1) : Simplification without Bodmass
calc.a.'+'.b  =  chr.( (ord.(a)-48)  +  (ord.(b)-48)  +  48)
calc.a.'-'.b  =  chr.( (ord.(a)-48)  -  (ord.(b)-48)  +  48)
calc.a.'*'.b  =  chr.( (ord.(a)-48)  *  (ord.(b)-48)  +  48)
calc.a.'/'.b  =  chr.( (ord.(a)-48)  /  (ord.(b)-48)  +  48)


simpleeval.[x]=(ord.x)-48    -- main function
simpleeval.(x::y::z::xs)=simpleeval.(calc.x.y.z::xs)

-- Level 2  :  Siplification with Bodmass

bodmaseval.xs=(evaldiv;evalmul;simpleeval).xs

evaldiv.[x]=[x]
evaldiv.(x::y::z::xs)=if (y=='/') then evaldiv.(calc.x.y.z::xs) else x::y::evaldiv.(z::xs)

evalmul.[x]=[x]
evalmul.(x::y::z::xs)=if (y=='*') then evalmul.(calc.x.y.z::xs) else x::y::evalmul.(z::xs)