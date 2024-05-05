import { NextRequest } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

async function checkCollection(table: string) {
    const collectionRef = collection(db, table);
    const doc = await getDocs(collectionRef);
    if (doc.empty) {
        await addDoc(collectionRef, {});
    }
}

export async function GET(
    req: NextRequest,
    context: {
        params: {
            table: string,
            id: string
        }
    }
) {
    try {
        console.log(`GET request received at path /api/${context.params.table}/${context.params.id}`)

        const { table, id } = context.params;
        await checkCollection(table);

        const querySnapshot = await getDocs(collection(db, table));
        const doc = querySnapshot.docs.find(doc => Object.keys(doc.data())[0] === id);

        if (!doc) {
            return Response.json({
                message: 'Document not found',
                data: []
            }, { status: 404 })
        } else {
            return Response.json({
                message: 'Document found successfully',
                data: doc.data()
            }, { status: 200 })
        }
    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Error fetching document',
            data: error
        }, { status: 500 })
    }
}

export async function PUT(
    req: NextRequest,
    context: {
        params: {
            table: string,
            id: string
        }
    }
) {
    try {
        console.log(`PUT request received at path /api/${context.params.table}/${context.params.id}`)

        const body = await req.json();
        const { table, id } = context.params;
        await checkCollection(table);

        const querySnapshot = await getDocs(collection(db, table));
        const doc = querySnapshot.docs.find(doc => Object.keys(doc.data())[0] === id);

        console.log(doc)
        console.log(body)

        if (!doc) {
            return Response.json({
                message: 'Document not found',
                data: []
            }, { status: 404 })
        } else {
            await deleteDoc(doc.ref);
            await addDoc(collection(db, table), { [id]: body });
            return Response.json({
                message: 'Document updated successfully',
                data: []
            }, { status: 200 })
        }
    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Error updating document',
            data: error
        }, { status: 500 })
    }
}

export async function DELETE(
    req: NextRequest,
    context: {
        params: {
            table: string,
            id: string
        }
    }
) {
    try {
        console.log(`DELETE request received at path /api/${context.params.table}/${context.params.id}`)

        const { table, id } = context.params;
        await checkCollection(table);

        const querySnapshot = await getDocs(collection(db, table));
        const doc = querySnapshot.docs.find(doc => Object.keys(doc.data())[0] === id);

        if (!doc) {
            return Response.json({
                message: 'Document not found',
                data: []
            }, { status: 404 })
        } else {
            await deleteDoc(doc.ref);
            return Response.json({
                message: 'Document deleted successfully',
                data: []
            }, { status: 200 })
        }
    } catch (error) {
        console.log(error)
        return Response.json({
            message: 'Error deleting document',
            data: error
        }, { status: 500 })
    }
}