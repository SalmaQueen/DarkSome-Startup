import React, { Component } from 'react'
import './card.css'
import Data from './Data'
import svg1 from '../../Images/arrow.svg'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  }
}))

export default function AltCard() {
  const classes = useStyles()

  return (
      <div className={classes.root}>
          <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
          >
              {Data.map(elem => (
                  <Grid item xs={12} sm={6} md={3} xl={3} key={Data.indexOf(elem)}>
                      <Card>
                      <img className="image img-fluid" src={elem.url} alt=""/>
                          
                          <h2
                             className="card-color"
                             >{elem.title}
                                </h2>
                              
                          
                          
                          <CardContent className="card-details">
                              <Typography variant="h5" gutterBottom>
                              <p>{elem.description} </p>
                              <div className="read-more">Read More<span>
                          <img className="pl-3" src={svg1} alt=""/></span></div>
                          <button className="buy-now ">Buy Now</button>
                              </Typography>
                          </CardContent>
                      </Card>
                   </Grid>
              ))}
          </Grid>
      </div>
  )
}







// export default class Card extends Component {
//     render() {
//         return (
//             <>
//             {
//               Data.map((item)=>
//                 <div className="cards" key={item.id}>
//                   <img className="image" src={item.url} alt=""/>
            
//                 <div className="card-details ">
//                   <h2>{item.title}</h2>
//                   <p>{item.description} </p>
//                   <div className="read-more">Read More<span>
//                     <img className="pl-3" src={svg1} alt=""/></span></div>
//                   <h3 className="price">$25</h3>
//                   <button className="buy-now ">Buy Now</button>
                  
//                 </div>
//               </div>

//               )
//             }
              
 

//             </>
//         )
//     }
// }
