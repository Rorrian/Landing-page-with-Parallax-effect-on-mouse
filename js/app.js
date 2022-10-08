// document.addEventListener('mousemove', e => {
//     //Передаем значения текущего положения курсора мыши при движении в HTML для работы с ними в CSS
//     document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
// });

document.addEventListener('mousemove', e => {
    //Передаем значения текущего положения курсора мыши при движении в HTML для работы с ними в CSS
    document.documentElement.style.setProperty('--move-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--move-y', `${e.clientY}px`);
});