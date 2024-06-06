import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ExternalRedirect = ({ to }: { to: string }) => {
    const hasRedirected = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!hasRedirected.current) {
            window.open(to, '_blank');
            hasRedirected.current = true;
            navigate(-1); 
        }
    }, [to, navigate]);

    return <Loading open={true} />; 
}

export default ExternalRedirect;