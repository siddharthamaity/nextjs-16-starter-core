import Image from 'next/image';

import ExtensionDetails from '@/app/(delete-this-and-modify-page.tsx)/ExtensionDetails';
import NavigationBar from '@/app/(delete-this-and-modify-page.tsx)/NavigationBar';
import SetupDetails from '@/app/(delete-this-and-modify-page.tsx)/SetupDetails';

import './HomePage.css';

export default function Home() {
    return (
        <div className='page'>
            <NavigationBar />
            <div className='main'>
                <Image className='logo' src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
                <ol>
                    <li>
                        Get started by editing <code>src/app/page.tsx</code>.
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <div className='ctas'>
                    <a
                        className='primary'
                        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Image className='logo' src='/vercel.svg' alt='Vercel logomark' width={20} height={20} />
                        Deploy now
                    </a>
                    <a
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='secondary'>
                        Read Next.js docs
                    </a>
                </div>
                <SetupDetails />
                <ExtensionDetails />
            </div>
            <footer className='footer'>
                <a
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image aria-hidden src='/file.svg' alt='File icon' width={16} height={16} />
                    Learn
                </a>
                <a
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
                    Examples
                </a>
                <a
                    href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
