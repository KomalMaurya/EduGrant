/* eslint-disable react/prop-types */

const ScholarshipCard = ({scholarship}) => {
  return (
    <div className="border p-6 shadow rounded">
        <div className="flex justify-between items-center">
            <img className="h-8" src={scholarship.company_logo} alt=""/>
        </div>
        <h4 className="font-medium text-xl mt-2">{scholarship.title}</h4>
        <div className="flex items-center gap-3 text-xs mt-2">
            <span className="bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded">{scholarship.category}</span>
            <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded">{scholarship.deadline}</span>
        </div>
        <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{__html:scholarship.description.slice(0,150)}}></p>
        <div className="mt-4 flex gap-4 text-sm">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded">Apply now</button>
            <button className="text-gray500 border border-gray-500 rounded px-4 py-2">Learn more</button>
        </div>
    </div>
  )
}

export default ScholarshipCard