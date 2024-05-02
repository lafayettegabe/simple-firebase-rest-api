import { NextRequest } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

export async function GET(
    req: NextRequest
) {
    try {
        console.log("GET request received")
        const querySnapshot = await getDocs(collection(db, 'data'));

        // Get data from documents (firebase returns with a lot of metadata)
        let data = querySnapshot.docs.map(doc => doc.data());
        
        // Sort by timestamp (can be removed if not needed)
        data.sort((a, b) => {
            return Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]);
        });

        /*
        Log the date of each document for debugging
        data.map(doc => {
            const key = Object.keys(doc)[0];
            const date = new Date(Number(key));
            console.log(date.toLocaleString('en-GB', { timeZone: 'UTC' }));
        });
        */

        return Response.json({
            message: 'Documents found successfully',
            data: data
        }, { status: 200 })

    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Error finding documents',
            data: error
        }, { status: 500 })
    }
}

export async function POST(
    req: NextRequest
) {
    try {
        console.log("POST request received")
   
        // code below is for testing purposes only
        // it generates random data if the request body is empty (POST button in the UI does this for testing)
        let data;
        try {
            const body = await req.json();
            data = body.data;
        } catch (error) {
            if (error instanceof SyntaxError) {
                data = {
                    lat: (Math.random() * (90 - -90) + -90).toFixed(2),
                    lon: (Math.random() * (180 - -180) + -180).toFixed(2)
                }
            } else {
                throw error;
            }
        }

        // Save data to firebase with timestamp as key (can be replaced or removed if not needed)
        const name = new Date().getTime().toString();
        const docRef = await addDoc(collection(db, 'data'), {
            [name]: data
        });

        return Response.json({
            message: 'Document added successfully',
            data: docRef
        }, { status: 200 })

    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Error adding document',
            data: error
        }, { status: 500 })
    }
}

export async function DELETE(
    req: NextRequest
) {
    try {
        console.log("DELETE request received")
        const querySnapshot = await getDocs(collection(db, 'data'));
        querySnapshot.docs.map(doc => deleteDoc(doc.ref));

        return Response.json({
            message: 'Documents deleted successfully',
            data: querySnapshot.docs.length
        }, { status: 200 })
    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Error deleting documents',
            data: error
        }, { status: 500 })
    }
}