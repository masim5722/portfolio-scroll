import { NextApiRequest, NextApiResponse } from 'next';

// Sample portfolio data
const portfolioItems = [
    {
        image: 'https://images.unsplash.com/photo-1722359546494-8e3a00f88e95?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 1',
        description: 'Description for Project 1',
        link: 'https://unsplash.com/photos/an-aerial-view-of-a-beach-and-a-body-of-water-_BS-vK3boOU',
    },
    {
        image: 'https://images.unsplash.com/photo-1722431096503-3dad915732ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 2',
        description: 'Description for Project 2',
        link: 'https://unsplash.com/photos/a-group-of-people-walking-down-a-street-next-to-tall-buildings-4BGnUBL4Sbw',
    },
    {
        image: 'https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 3',
        description: 'Description for Project 3',
        link: 'https://unsplash.com/photos/a-man-holding-a-cell-phone-in-his-hand-gCTPav6smJE',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1722377372981-49848d7e4dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 4',
        description: 'Description for Project 4',
        link: 'https://unsplash.com/photos/a-woman-sitting-on-the-ground-holding-a-little-girl-KcS4LntjzUk',
    },
    {
        image: 'https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 5',
        description: 'Description for Project 5',
        link: 'https://unsplash.com/photos/a-woman-sitting-at-a-table-using-a-cell-phone-nplkFSNschY',
    },
    // Duplicating items for continuous scrolling
    {
        image: 'https://images.unsplash.com/photo-1722431096503-3dad915732ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 2',
        description: 'Description for Project 2',
        link: 'https://unsplash.com/photos/a-group-of-people-walking-down-a-street-next-to-tall-buildings-4BGnUBL4Sbw',
    },
    {
        image: 'https://images.unsplash.com/photo-1719937050814-72892488f741?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 3',
        description: 'Description for Project 3',
        link: 'https://unsplash.com/photos/a-man-holding-a-cell-phone-in-his-hand-gCTPav6smJE',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1722377372981-49848d7e4dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 4',
        description: 'Description for Project 4',
        link: 'https://unsplash.com/photos/a-woman-sitting-on-the-ground-holding-a-little-girl-KcS4LntjzUk',
    },
    {
        image: 'https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Project 5',
        description: 'Description for Project 5',
        link: 'https://unsplash.com/photos/a-woman-sitting-at-a-table-using-a-cell-phone-nplkFSNschY',
    }
];

// API route handler to handle GET requests
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Return portfolio data on GET request
        res.status(200).json(portfolioItems);
    } else {
        // Method not allowed
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}