main = do
  -- simple if statement
  if False
    then "True it is!"
    else "so False it be"

  -- let bindings
  fancyNine =
    let x = 4
      y = 5
    in x + y

  -- where binding (must be used in function definition)
  fancyNine = x + y
    where x = 4
          y = 5

  -- recursion examples
  let repeatString str n =
    if n == 0
    then ""
    else str ++ repeatString str (n-1)

  let loop n x i =
    if i < n
    then loop n (x + 1) (i + 1)
    else x

  -- Pattern Matching
  fst' (a,b) = a
  snd' (a,b) = b

  null' [] = True
  null' (x : xs) = False -- x concated to some array of x's

  -- guards
  pow2 n
    | n == 0    = 1
    | otherwise = 2 * (pow2 (n-1)) -- default case

  -- case expression
  double nums = case nums of
    []       -> []
    (x : xs) -> (2*x) : (double xs)


-- zip
zip [1,2] [3,4,5,6] -- => [(1,3), (2,4)]

-- zipWith
zipWith (+) [1,2,3] [4,5,6] -- => [5,7,9]

-- higher order functions
let pass3 = func = func 3
let add1 = x = x + 1
pass3 add1

-- map
map length ["hello ", "world", "!"]

sum (map length ["hello ", "world", "!"])

let doubleList = map (2*)
doubleList([1,2,3])

-- composition
stringLength = length . show
stringLength 50000 -- => 5

notNull = not . null
notNull [1,2] -- => True
notNull [] -- => False

-- filter
let notNull xs = not (null xs)
filter notNull ["", "abc", "", "hello", ""]

-- using map and filter together
map snd filter fst [(True,1), (False,7), (True,11)]


-- foldl (faster because it is tail recursive)
foldl (-) 0 [1,2,3]  -- => -6

-- foldr (better to use with infinite lists)
foldr (-) 0 [1,2,3]  -- => 2

-- pattern matching
lucky :: (Integral a) => a -> String
let lucky x = show x ++ " is your lucky number!!!"
lucky 8

third :: (a, b, c) -> c
third(_,_, z) = z

let xs = [(1,3), (4,3), (2,4), (5,3), (5,6), (3,1)]
[a+b | (a,b) <- xs]

head' :: [a] -> a
head' [] = error "Call on empty list not allowed"

-- lambda expressions
map (\ x -> 2 * x) [1,2,3] -- [2,4,6]

map (\x -> 2 * x + 1) [1,2,3] -- [3,5,7]


-- types
