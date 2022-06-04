<?php
namespace php_lab1\Test;
use PHPUnit\Framework\TestCase;
class UserTest extends TestCase{
public User $user;
public string $email="nagwatalaat52@gmail.com";
public string $name ="nagwa";
    public function setUp(): void
    {
$this->user = new User($this->name, $this->email);
}

    public function testGetEmail()
    {
      self::assertEquals($this->defaultEmail, $this->user->getEmail());
    }

    public function testGetName()
    {
      self::assertEquals($this->defaultName, $this->user->getName());
    }

    public function testSetEmail()
    {
      $testEmail = "samy@gmail.com";
      self::assertEquals($testEmail, $this->user->getEmail($testEmail));
    }

    public function testSetName()
    {
      $testName = "Samy";
      self::assertEquals($testName, $this->user->getName($testName));
    }

    public function tearDown(): void
    {
      unset($this->user);
    }
  
}
