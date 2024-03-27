"use client";

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ImBug } from 'react-icons/im';
import { Box, Container, Flex } from '@radix-ui/themes';

const NavBar = () => {
	const current_path = usePathname();
	const {status, data: session} = useSession();

	const links = [
		{ href: "/", label: "Dashboard" },
		{ href: "/issue/list", label: "Issue" }
	];

	return (
			<nav className='border-b mb-5 py-3'>
				<Container>	
					<Flex justify="between">
						<Flex align="center" gap="3">
						<Link href="/"><ImBug /></Link>
						<ul className='flex space-x-6'>
							{
								links.map(link => 
									<li key={`${link.href}_${link.label}`}>
										<Link 
											href={link.href} 							
											className={classNames({
												"text-zinc-900": current_path === link.href,
												"text-zinc-500": current_path !== link.href,
												"hover:text-zinc-800 transition-colors": true
											})}
										>
											{link.label}
										</Link>
									</li>
								)
							}
						</ul>	
						</Flex>
						<Box>
							{(status === "authenticated") && <Link href={`/api/auth/signout`}>Log Out</Link>}
							{(status === "unauthenticated") && <Link href={`/api/auth/signin`}>Log In</Link>}
						</Box>
					</Flex>
				</Container>
			</nav>
	)
}

export default NavBar;
