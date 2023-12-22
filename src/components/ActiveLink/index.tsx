import { ReactElement } from "react";
import { useRouter } from "next/router";
import Link, {LinkProps} from "next/link";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}){
    const {asPath} = useRouter();
    return(
        <Link href={"/"}><a>Teste</a></Link>    
    )
}