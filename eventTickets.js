// На мой взгляд как бы выглядел объект для переноса данных в таблицу 
const DataTable = {
  id,
  event_id,
  event_date,
  "tickets": [  // Из таблицы видно, что каждый столбец показывает отдельный показатель. Билеты содержатся в массиве и можно добавлять разные виды билетов
    { ticket_adult_price, ticket_adult_quantity },
    { ticket_kid_price, ticket_kid_quantity },
    { ticket_preference_price, ticket_preference_quantity },
    { ticket_group_price, ticket_group_quantity },
  ],
  "barcodes": [
    // массив баркодов из суммы количества билетов в одном заказе
  ],
  equal_price,
  created,
}