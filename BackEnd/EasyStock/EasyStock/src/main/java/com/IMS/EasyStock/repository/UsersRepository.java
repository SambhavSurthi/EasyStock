package com.IMS.EasyStock.repository;


import com.IMS.EasyStock.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users,Long> {

    Optional<Users> findByEmail(String Email);
    boolean existsByEmail(String email);

}
