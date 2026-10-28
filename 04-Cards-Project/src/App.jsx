import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobs = [
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Google",
    dateposted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Microsoft",
    dateposted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Amazon",
    dateposted: "2 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    name: "Apple",
    dateposted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/3840px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    name: "Meta",
    dateposted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    dateposted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthFkKxxe5oOqzfgM7YR46pLgPnm9Q4ihc6Cz3RsR3akjh-KFpH7NTKORj&s=10",
    name: "NVIDIA",
    dateposted: "2 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
    name: "Adobe",
    dateposted: "3 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_oracle.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Oracle",
    dateposted: "6 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "IBM",
    dateposted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Bengaluru, India"
  }
];


  return (
    <div className='parent'>
  {
    jobs.map((elem,index)=>{
     return <div key={index}> <Card      
     
      brandlogo= {elem.brandlogo}
    name={elem.name}
    dateposted={elem. dateposted}
    post={elem.post}
    tag1= {elem.tag1}
    tag2={elem.tag2}
    pay={elem.pay}
    location={elem.location} 
     />
     </div>
    }) }
    </div>
  )
}

export default App
