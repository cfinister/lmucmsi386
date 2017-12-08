-- By Anthony K, Cherrell F, Marissa A
module Warmup exposing (change, stripQuotes, powers, sumOfCubesOfOdds, daysBetween)
import Date exposing (toTime, fromString)
import Regex exposing (..)

coin: Int -> Int -> (Int , Int)
coin a b = (a // b, a % b)

ifOdd: Int -> Bool
ifOdd x = x % 2 == 1

change: Int -> Result String (Int, Int, Int, Int)
change amount =
  if amount < 0 then
    Err "amount cannot be negative"
    else
      let
        (quarters, afterQuarters) = coin amount 25
        (dimes, afterDimes) = coin afterQuarters 10
        (nickels, pennies) = coin afterDimes 5
      in
        Ok (quarters, dimes, nickels, pennies)

stripQuotes: String -> String
stripQuotes = Regex.replace Regex.All (Regex.regex "[,\"\']") (\_-> "")


powers: Int -> Int -> Result String (List Int)
powers base max =
  if base < 0 then
    Err "negative base"
  else let
    powersHelper current =
      if(base^current) <= max then
        (base^current)::powersHelper (current + 1)
      else
        []

  in
    Ok <| powersHelper 0

sumOfCubesOfOdds: List Int -> Int
sumOfCubesOfOdds a =
  List.foldr (+) 0 <| List.map (\x -> x^3) <| List.filter ifOdd a

daysBetween: String -> String -> Result String Float
daysBetween dateString1 dateString2 =
  case (Date.fromString dateString1, Date.fromString dateString2) of
    (Err message, _) -> Err "Invaild first date"
    (_, Err message) -> Err "Invaild second date"
    (Ok d1, Ok d2) -> Ok <| (Date.toTime(d2) - Date.toTime(d1)) / 86400000
