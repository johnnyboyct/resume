import {
  useEffect,
  useState,
} from 'react';

import {
  Backdrop,
  LinearProgress,
} from '@mui/material';

import styles from './Github.css';

export interface IGithubProps {
    basics?: any
    username?: string
}
interface IData {
    name: any
    avatar_url: any
    login: any
    public_repos: any
    public_gists: any
    followers: any
    following: any
    location: any
    html_url: any
    bio: any
}

export default function Github({ basics, username }: IGithubProps) {
    const [open, setOpen] = useState(true)
    const [data, setData] = useState<IData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    if (!username) {
        const userProfile = basics.profiles.find((p: { network: string }) => {
            return p.network.toLowerCase() == 'github'
        })
        username = userProfile.username;
    }
    const userURL = `https://api.github.com/users/${username}`
    const repoURL = `https://api.github.com/search/repositories?q=${username}&sort=stars&per_page=100&type=Repositories`;

    const [user, setUser] = useState(username);


    const fetchUsers = async (url: RequestInfo | URL) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            const result = await response.json();
            // console.log(result);

            setData(result);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUsers(userURL);
        // fetchUsers(repoURL);
    }, []);


    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    if (loading) {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <LinearProgress color='primary' />
            </Backdrop>
        )
    } else {

        // if (error) {
        //   return <h2>{`Fetch error: ${error.message}`}</h2>
        // }

        return (
            <div className={styles.wrapper}>
                <div>
                    <div className='card'>
                        <h3 className='text-center card-header'>{data?.name}</h3>
                        <div className='card-block'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <img className='img-thumbnail' src={data?.avatar_url} alt='' />
                                </div>
                                <div className='col-sm-8'>
                                    <h4 className='card-title'>{data?.login}</h4>
                                    <p className='card-text'>
                                        <span className='badge badge-default'>
                                            Repos: {data?.public_repos}
                                        </span>
                                        <span className='badge badge-default'>
                                            Gists: {data?.public_gists}
                                        </span>
                                        <span className='badge badge-default'>
                                            Followers: {data?.followers}
                                        </span>
                                        <span className='badge badge-default'>
                                            Following: {data?.following}
                                        </span>
                                    </p>
                                    <p className='card-text'>
                                        <span className='badge badge-default'>Location </span>:
                                        {data?.location}
                                    </p>
                                    <p className='card-text'>
                                        <span className='badge badge-default'>Bio </span>:{data?.bio}
                                    </p>
                                    <a
                                        href={data?.html_url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='btn btn-secondary'
                                    >
                                        Visit Github Profile
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <h3 className='text-center card-header'>
                                {data?.login}'s Repositories
                            </h3>
                            {/* <RepoList userRepos={this.props.userRepos} /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
