import * as React from 'react';
import { useQuery } from 'react-query';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type ListSeekersProps = {
	openEdit?: any,
	openDelete?: any,
};

export const ListSeekers: React.FC<ListSeekersProps> = ({
	openEdit,
	openDelete,
}) => {
	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ')
	}

	const people = [
		{
			applicant: 'applicant',
			position: 'position',
			company: 'company',
			phone: 'phone',
			email: 'email',
		},
	]

	return (
		<div className="tablebox list">
			<table className="table-auto">
				<thead>
					<tr>
						<th scope="col">Applicants</th>
						<th scope="col">Job Position</th>
						<th scope="col">Company Name</th>
						<th scope="col">Phone</th>
						<th scope="col">Email</th>
						<th className="text-center" scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{people.map((person) => (
						<tr key={person.applicant}>
							<td className="">{person.applicant}</td>
							<td className="w-1/6">{person.position}</td>
							<td className="w-1/6">{person.company}</td>
							<td className="w-1/6">{person.phone}</td>
							<td className="w-1/6">{person.email}</td>
							<td className="cursor-pointer w-16">
								<Menu as="div" className="relative">
									<div>
										<Menu.Button className="text-center font-bold w-full hover:text-secondary focus:text-secondary focus:border-0">
											· · ·
										</Menu.Button>
									</div>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>

										<Menu.Items className="origin-top-right absolute right-1/2 shadow-md bg-white">
											<div className="py-1">
												{openEdit ? (
													<Menu.Item onClick={openEdit}>
														{({ active }) => (
															<a
																href="#"
																className={classNames(
																	active ? 'bg-gray-200 text-secondary' : 'text-gray-900',
																	'block px-4 py-1 text-sm text-right'
																)}
															>
																Edit
															</a>
														)}
													</Menu.Item>
												) : ''}
												{openDelete ? (
													<Menu.Item onClick={openDelete}>
														{({ active }) => (
															<a
																href="#"
																className={classNames(
																	active ? 'bg-gray-100 text-secondary' : 'text-gray-900',
																	'block px-4 py-1 text-sm text-right'
																)}
															>
																Delete
															</a>
														)}
													</Menu.Item>
												) : ''}
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div >
	);
};
