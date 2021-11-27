import { LayoutDashboard } from 'components/layout';
import { useUser } from 'hooks/user';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { Typography } from 'components/common/typography';
import { Databox } from 'components/common/databox';
import * as React from 'react';

const Dashboard = () => {
	const user = useUser();
	const people = [
		{
			name: 'Jane Cooper',
			phone: '+1 232 8736145',
			email: 'jane.cooper@example.com',
			image:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
		},
	]

	return (
		<LayoutDashboard title="Dashboard">
			<Typography
				type="title"
				className="mb-9 text-2xl text-gray-900 font-bold mt-10"
			>
				Your Dashboard
			</Typography>
			<div className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
				<Databox
					color="light"
					number="111,111"
					text="New Data"
					customIcon='home'
				>
					Your Dashboard
				</Databox>
				<Databox
					color="light"
					number="111,111"
					text="New Data"
					customIcon='briefcase'
				>
					Your Dashboard
				</Databox>
				<Databox
					color="light"
					number="111,111"
					text="New Data"
					customIcon='folder'
				>
					Your Dashboard
				</Databox>
				<Databox
					color="light"
					number="111,111"
					text="New Data"
					customIcon='toolbox'
				>
					Your Dashboard
				</Databox>

			</div>


			<div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 py-8">

				{/* TABLE */}
				<div className="tablebox dashboard">
					<div className="title">Recent Logins</div>
					<table>
						<thead>
							<tr>
								<th scope="col">Full Name</th>
								<th scope="col">Phone</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>
							{people.map((person) => (
								<tr key={person.name}>
									<td>
										<div className="flex items-center">
											<div className="flex-shrink-0 mr-2">
												<img className="h-6 w-6 rounded-full" src={person.image} alt="" />
											</div>
											{person.name}
										</div>
									</td>
									<td>{person.phone}</td>
									<td>{person.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* TABLE */}
				<div className="tablebox dashboard">
					<div className="title">Latest Business</div>
					<table>
						<thead>
							<tr>
								<th scope="col">Company Name</th>
								<th scope="col">Category</th>
								<th scope="col">Phone</th>
							</tr>
						</thead>
						<tbody>
							{people.map((person) => (
								<tr key={person.name}>
									<td>
										<div className="flex items-center">
											<div className="flex-shrink-0 mr-2">
												<img className="h-6 w-6 rounded-full" src={person.image} alt="" />
											</div>
											{person.name}
										</div>
									</td>
									<td>{person.phone}</td>
									<td>{person.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* TABLE */}
				<div className="tablebox dashboard">
					<div className="title">Latest Job Seekers</div>
					<table>
						<thead>
							<tr>
								<th scope="col">Full Name</th>
								<th scope="col">Phone</th>
								<th scope="col">Email</th>
							</tr>
						</thead>
						<tbody>
							{people.map((person) => (
								<tr key={person.name}>
									<td>
										<div className="flex items-center">
											<div className="flex-shrink-0 mr-2">
												<img className="h-6 w-6 rounded-full" src={person.image} alt="" />
											</div>
											{person.name}
										</div>
									</td>
									<td>{person.phone}</td>
									<td>{person.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* TABLE */}
				<div className="tablebox dashboard">
					<div className="title">Latest Application Submissions</div>
					<table>
						<thead>
							<tr>
								<th scope="col">Full Name</th>
								<th scope="col">Job Position</th>
								<th scope="col">Company</th>
							</tr>
						</thead>
						<tbody>
							{people.map((person) => (
								<tr key={person.name}>
									<td>
										<div className="flex items-center">
											<div className="flex-shrink-0 mr-2">
												<img className="h-6 w-6 rounded-full" src={person.image} alt="" />
											</div>
											{person.name}
										</div>
									</td>
									<td>{person.phone}</td>
									<td>{person.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>


			</div>


		</LayoutDashboard>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (session && session.accessToken) {
		return {
			props: {},
		};
	}
	return {
		redirect: {
			destination: '/',
			permanent: false,
		},
	};
};

export default Dashboard;
