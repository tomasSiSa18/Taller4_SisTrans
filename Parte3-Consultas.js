// 1.
db.Bares.find({ "direccion.codigo_postal": X})

// 2.
db.Bebedores.aggregate([
  {
    $match: {
      bares_frecuentados: { $size: { $gte: 10, $lte: 20 } }
    }
  },
  {
    $project: {
      _id: 1,
      nombre: 1,
      bares_frecuentados: 1
    }
  }
])

// 3.

db.Bares.aggregate([
  {
    $group: {
      _id: { ciudad: "$ciudad", tipo_presupuesto: "$presupuesto.tipo_presupuesto" },
      count: { $sum: 1 }
    }
  },
  { 
    $sort: { "_id.ciudad": 1, count: -1 } 
  },
  {
    $group: {
      _id: "$_id.ciudad",
      tipo_presupuesto: { $first: "$_id.tipo_presupuesto" },
      count: { $first: "$count" }
    }
  }
])