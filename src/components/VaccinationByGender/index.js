import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props
  return (
    <div className="gender-card-container">
      <h1 className="gender-card-heading">Vaccination by gender</h1>
      <div className="pie-chart-container">
        <ResponsiveContainer
          minWidth={300}
          minHeight={300}
          maxWidth={500}
          maxHeight={500}
        >
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={vaccinationByGenderData}
              startAngle={0}
              endAngle={180}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#f54394" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#2cc6c6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByGender
