module Cylinder exposing (..)
type alias Cylinder = { radius: Float, height: Float }

new : Cylinder
new = { radius = 1.0
       , height = 1.0
      }
stretch: Int -> Cylinder -> Cylinder
stretch x cylnd = { radius = cylnd.radius
                  , height = cylnd.height * (toFloat x)
                  }

widen: Int -> Cylinder -> Cylinder
widen y cylnd2 = { radius = cylnd2.radius * (toFloat y)
                 , height = cylnd2.height
                 }

volume : Cylinder -> Float
volume cyl =
    (baseArea cyl) * cyl.height

surfaceArea : Cylinder -> Float
surfaceArea cyl =
    ( 2 * baseArea cyl) + ( 2 * pi * cyl.radius * cyl.height)

baseArea : Cylinder -> Float
baseArea cyl =
    pi * cyl.radius * cyl.radius
