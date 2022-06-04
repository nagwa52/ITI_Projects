<?php
class User{
    private string $name;
    private string $email;
 public function __construct(string $name = "", string $email = ""){

      $this->name = $name;
      $this->email = $email;
}
  public function getName(string $name = ''): string
    {
      if (!empty($name))  {
        $this->name = $name;
      }
        return $this->name;
    }

    /**
     * @param string $email
     * @return string
     */
    public function getEmail(string $email = ''): string
    {
      if (!empty($email))  {
        $this->email = $email;
      }
        return $this->email;
    }
}
