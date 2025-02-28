import React from 'react';

export default function Listicon(props) {
        return (
                <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width={24} 
                        height={24} viewBox="0 0 256 256" 
                        {...props}
                >
                        <path 
                                fill="#001321" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 152H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"/>
                </svg>
        );
}