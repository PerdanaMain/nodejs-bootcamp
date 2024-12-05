/* 
? Pada umumnya, bahasa pemrograman (Javascript) di proses secara synchronous. Namun, ada kondisi dimana suatu proses pada baris kode tertentu untuk menunggu proses pada baris yang lain selesai. Race Condition adalah keadaan saat suatu proses “mendahului” proses yang lainnya.


*/

// Contoh 1
function readBooks(time, book, callback) {}
