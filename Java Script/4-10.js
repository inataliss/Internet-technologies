function changeSizeImage(image) {
    if (image.classList.contains('enlarged')) {
        image.classList.remove('enlarged'); // Возвращает картинку в исходное положение
    } else {
        image.classList.add('enlarged'); // Добавляем класс, если его нет
    }
}
