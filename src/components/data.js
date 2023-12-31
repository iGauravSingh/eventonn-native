
import art from '../../assets/icons/art.png'
import agriculture from '../../assets/icons/agriculture.png'
import education from '../../assets/icons/education.png'
import construction from '../../assets/icons/helmet.png'
import science from '../../assets/icons/microscope.png'
import video from '../../assets/icons/video.png'
import all from '../../assets/icons/all.png'

export const categoryData = [
    {id:1, name: 'all', image: all},
    {id:2, name: 'art', image: art},
    {id:3, name: 'agriculture', image: agriculture},
    {id:4, name: 'education', image: education},
    {id:5, name: 'construction', image: construction},
    {id:6, name: 'science', image: science},
    {id:7, name: 'tv', image: video},
]


// ongoing event data


import sci from '../../assets/sci.jpg'
import robo from '../../assets/robo.jpg'
import agri from '../../assets/agri.jpg'
import construct from '../../assets/construct.jpg'
import tv from '../../assets/tv.jpg'
import tv2 from '../../assets/tv2.jpg'
import artShow from '../../assets/art.jpg'
import edu1 from '../../assets/edu1.jpg'


export const eventOngoingData = [
    {id: 1, name: 'ScinceCon' , category: 'science' , image: sci , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '10 september', dateEnd: '12 september', city: 'delhi' , venue: 'pragati maidan' ,pin:'123456', sheets:400, timing: '10am to 5pm', ticketPrice: 500 },
    {id: 2, name: 'RoboCon' , category: 'science' , image: robo , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '18 september', dateEnd: '22 september', city: 'bangaluru' , venue: 'pragati maidan' ,pin:'123456', sheets:400, timing: '10am to 5pm', ticketPrice: 500 },
    {id: 3, name: 'AgriMeet' , category: 'agriculture' , image: agri , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '5 september', dateEnd: '12 september', city: 'lucknow' , venue: 'indra gandhi Prathistan' ,pin:'223456', sheets:400, timing: '10am to 5pm', ticketPrice: 200 },
    {id: 4, name: 'BuildOn' , category: 'construction' , image: construct , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '1 september', dateEnd: '5 september', city: 'chennai' , venue: 'raja raja hall' ,pin:'523456', sheets:400, timing: '10am to 5pm', ticketPrice: 300 },
    {id: 5, name: 'commecon' , category: 'tv' , image: tv , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '18 september', dateEnd: '25 september', city: 'mumbai' , venue: 'shiva ji hall' ,pin:'893456', sheets:400, timing: '10am to 5pm', ticketPrice: 300 },
    {id: 6, name: 'filmfare' , category: 'tv' , image: tv2 , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '27 september', dateEnd: '28 september', city: 'mumbai' , venue: 'alpha hall' ,pin:'893456', sheets:400, timing: '10am to 5pm', ticketPrice: 300 },
    {id: 7, name: 'colorcon' , category: 'art' , image: artShow , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '27 september', dateEnd: '28 september', city: 'mumbai' , venue: 'alpha hall' ,pin:'893456', sheets:400, timing: '10am to 5pm', ticketPrice: 300 },
    {id: 8, name: 'playground' , category: 'education' , image: edu1 , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, adipisci!', dateStart: '27 september', dateEnd: '28 september', city: 'mumbai' , venue: 'alpha hall' ,pin:'893456', sheets:400, timing: '10am to 5pm', ticketPrice: 300 },
]
