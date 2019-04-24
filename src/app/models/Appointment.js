module.exports = (sequelize, DataType) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataType.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user_id' })
    Appointment.belongsTo(models.User, { foreignKey: 'provider_id' })
  }

  return Appointment
}
