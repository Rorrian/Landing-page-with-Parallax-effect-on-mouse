# Лендинг с параллакс-эффектом при движении мыши

* Parallax эффект при движении мыши:

* Отображение соответствующего фото при наведении на пункт меню
* Использование counter-increment

Deployment:  
https://rorrian.github.io/Landing-page-with-Parallax-effect-on-mouse/
________________

Реализация момента переключения фото на курсорах пунктов списка(каждый пункт - конкретное фото):  
Момент смены фото сделан через HTML - у каждого пункта списка есть свой блок с курсором, в котором свое конкретное фото.
Поэтому на разных пунктах списка фото на курсоре меняется на соответствующее.
Анимация:  
Изначально высота курсора с фото = 0. При наведении на пункт меню - высота рассчитывается и задается курсору с фото =
фото постепенно увеличивается(с transition).

Реализация параллакс-эффекта:  
Изначально нам показывается фото на курсоре не полностью, а лишь бОльшая его срединная часть
(за счет того, что отображаемый блок .cursor меньше реального размера блока .cursor__image в 2 раза).
При приближении к краям экрана область отображаемого фото смещается соответственно:
при приближении к левому краю экрана - область фото смещается влево и на курсоре становится видно левый край фото, к правому аналогично.
Смена направления достигается с помощью деления на отрицательные значения.



