import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
    const target = useBaseUrl('/kubernetes');
    return <Redirect to={target} />;
}
