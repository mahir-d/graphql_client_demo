import React from 'react'
import { gql, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'



export default function BinItButton({ image_obj, updateCalled }) {

    const bin_it_query = gql`
        mutation updateImage($id: ID!
                $url: String
                $posterName: String
                $description: String
                $userPosted: Boolean
                $binned: Boolean
                $numBinned: Int){
                    updateImage( id: $id, url: $url, posterName: $posterName, description: $description, userPosted: $userPosted, binned: $binned, numBinned: $numBinned ){
                         
                        id
                        url
                        posterName
                        description
                        userPosted
                        binned
                        numBinned

                    }
                        
                    
             }
        
        
    `;
    const [binIt] = useMutation(bin_it_query);

    const run_query = () => {
        binIt({ variables: { id: image_obj.id, url: image_obj.url, posterName: image_obj.posterName, description: image_obj.description, userPosted: image_obj.userPosted, binned: image_obj.binned, numBinned: image_obj.numBinned } });
        if (updateCalled !== undefined) { updateCalled() }
    }



    if (image_obj.binned == false) {
        return (

            <div>
                <Button color="secondary" onClick={run_query}>Add to Bin</Button>
            </div>
        )
    }
    else {
        return (

            <div>
                <Button color="secondary" onClick={run_query}>Remove from Bin</Button>
            </div>
        )
    }






}