| customers |         |
| --------- | ------- |
| id        | UUID    |
| name      | varchar |

| products |               |
| -------- | ------------- |
| id       | UUID          |
| name     | varchar       |
| price    | decimal(10,2) |
| quantity | int           |

| orders      |         |
| ----------- | ------- |
| id          | UUID    |
| customer_id | UUID FK |

| orders_products |               |
| --------------- | ------------- |
| order_id        | UUID FK       |
| product_id      | UUID FK       |
| quantity        | int           |
| price           | decimal(10,2) |
